import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posts from './posts';
import Header from './Header';
import Footer from './Footer';
import './DetailPagination.css';
import DetailContent from './DetailContent';
import { Helmet } from "react-helmet";


class DetailPagination extends Component {

  constructor(props) {
    super(props);
    // в пагинации показываем номера постов от paginationCountmin до paginationCountmax
    this.state = {
      paginationCountmin: +this.props.match.params.id - 3,
      paginationCountmax: +this.props.match.params.id + 1
    };
    // при обновлении страница показывается сначала
    window.scrollTo(0, 0);
  }



  // метод вызывается перед render, нужен чтобы Details рендерелись при обновлении страницы
  componentWillMount() {
    // если текущий пост предпоследний показывать 3 номера слева и один справа
    if (String(this.props.match.params.id) === String(posts.data.length - 1)) {
      this.setState({
        paginationCountmin: +this.props.match.params.id - 4,
        paginationCountmax: +this.props.match.params.id
      })
      // если текущий пост последний показывать 4 номера слева
    } else if (String(this.props.match.params.id) === String(posts.data.length)) {
      this.setState({
        paginationCountmin: posts.data.length - 5,
        paginationCountmax: posts.data.length - 1
      })
      // если текущий пост первый или второй показывать первые 5 постов
    } else if (Number(this.props.match.params.id) < Number(3)) {
      this.setState({
        paginationCountmin: 0,
        paginationCountmax: 4
      })
      // в противном случае показывать 2 справа и 2 слева
    } else {
      this.setState({
        paginationCountmin: +this.props.match.params.id - 3,
        paginationCountmax: +this.props.match.params.id + 1
      })
    }
  }



  // при клике на нетекущий элемент пагинации отлавливаем id элемента на который кликали и работаем с ним
  componentWillReceiveProps(nextProps) {
    // при обновлении страница показывается сначала
    window.scrollTo(0, 0);
    // если текущий пост предпоследний показывать 3 номера слева и один справа
    if (String(nextProps.match.params.id) === String(posts.data.length - 1)) {
      this.setState({
        paginationCountmin: +nextProps.match.params.id - 4,
        paginationCountmax: +nextProps.match.params.id
      })
      // если текущий пост последний показывать 4 номера слева
    } else if (String(nextProps.match.params.id) === String(posts.data.length)) {
      this.setState({
        paginationCountmin: posts.data.length - 5,
        paginationCountmax: posts.data.length - 1
      })
      // если текущий пост первый или второй показывать первые 5 постов
    } else if (Number(nextProps.match.params.id) < Number(3)) {
      this.setState({
        paginationCountmin: 0,
        paginationCountmax: 4
      })
      // в противном случае показывать 2 справа и 2 слева
    } else {
      this.setState({
        paginationCountmin: +nextProps.match.params.id - 3,
        paginationCountmax: +nextProps.match.params.id + 1
      })
    }
  }


  render() {

    // получаем нужный пост по id
    var post = posts.getItem(this.props.match.params.id);

    // стиль для номера текущего поста
    // делаем номер неактивным
    var disabled = {
      pointerEvents: 'none',
      color: 'grey'
    };

    // стиль для всех постов кроме текущего
    var ondisabled = {
      color: 'black'
    };


    // получаем 5 элементов пагинации от min до max 
    var fiveItems = posts.getPagination(this.state.paginationCountmin, this.state.paginationCountmax);




    var pagination = fiveItems.map((item, index) => {
      // если элемент пагинации текущий, делаем его неактивным
      if (String(this.props.match.params.id) === String(item.id)) {
        return <Link key={index}
          to={/detail/ + item.id}
          style={disabled}>
          <li>#{item.id}</li>
        </Link>
      } else {
        return <Link key={index}
          to={/detail/ + item.id}
          style={ondisabled}>
          <li>#{item.id}</li>
        </Link>
      }
    });


    // ссылка пагинации на первый пост
    var first;
    // если текущий пост первый, отключить кнопку First
    if (Number(this.props.match.params.id) === 1) {
      first = <Link to={'/detail/' + posts.data[0].id} style={disabled}>
        <li>&lt; &lt; First</li>
      </Link>
      // в противном случае вернуться к первому элементу
    } else {
      first = <Link to={'/detail/' + posts.data[0].id} style={ondisabled}>
        <li>&lt; &lt; First</li>
      </Link>
    }


    // ссылка на предыдущий пост
    var previous;
    // если текущий пост первый, отключить кнопку Previous
    if (Number(this.props.match.params.id) === 1) {
      previous = <Link to={'/detail/' + 1} style={disabled}>
        <li>&lt; Previous</li>
      </Link>
      // в противном случае открыть предыдущий элемент
    } else {
      previous = <Link to={'/detail/' + (this.props.match.params.id - 1)} style={ondisabled}>
        <li>&lt; Previous</li>
      </Link>
    }


    // ссылка на следующий пост
    var next;
    // если текущий пост последний, отключить кнопку Next 
    if (String(this.props.match.params.id) === String(posts.data.length)) {
      next = <Link to={'/detail/' + (+this.props.match.params.id + 1)} style={disabled}>
        <li>Next &gt;</li>
      </Link>
      // в противном случае открыть следующий элемент
    } else {
      next = <Link to={'/detail/' + (+this.props.match.params.id + 1)} style={ondisabled}>
        <li>Next &gt;</li>
      </Link>
    }


    // ссылка на последний пост
    var last;
    // если текущий пост последний, отключить кнопку Last
    if (String(this.props.match.params.id) === String(posts.data.length)) {
      last = <Link to={'/detail/' + posts.data.length} style={disabled}>
        <li>Last &gt; &gt;</li>
      </Link>
      // в противном случае открыть последний элемент
    } else {
      last = <Link to={'/detail/' + posts.data.length} style={ondisabled}>
        <li>Last &gt; &gt;</li>
      </Link>
    }



    return (
      <div>
        {/* this code for document.head */}
        <Helmet>
          <title>{post.autor}</title>
          <meta name='description' content={post.description} />
        </Helmet>
        {/* this code for document.head */}
        <Header />
        <div className='detail'>
          <ul className='pagination'>
            {first}
            {previous}
            {pagination}
            {next}
            {last}
          </ul>
          <div>
            {/* пробрасываем даннае в DetailContent.js, чтобы получить нужные данные */}
            <DetailContent itemId={this.props.match.params.id}
              imagesLength={post.images.length} />
          </div>
          <ul className='pagination'>
            {first}
            {previous}
            {pagination}
            {next}
            {last}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetailPagination;