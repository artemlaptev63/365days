import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import posts from './posts';
import Header from './Header';
import Footer from './Footer';
import './DetailPagination.css';
import DetailContent from './DetailContent';

class DetailPagination extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            paginationCountmin: +this.props.match.params.id - 3,
            paginationCountmax: +this.props.match.params.id + 1
        };
        window.scrollTo( 0, 0 );
    }
    componentWillMount() {
        if (String(this.props.match.params.id) === String(posts.data.length - 1)) {
            this.setState({
                paginationCountmin: +this.props.match.params.id - 4,
                paginationCountmax: +this.props.match.params.id 
            })
        } else if (String(this.props.match.params.id) === String(posts.data.length)) {
            this.setState({
                paginationCountmin: posts.data.length - 5,
                paginationCountmax: posts.data.length - 1
            })
        } else if (Number(this.props.match.params.id) < Number(3)) {
            this.setState({
                paginationCountmin: 0,
                paginationCountmax: 4
            })
        }
          else {
            this.setState({
                paginationCountmin: +this.props.match.params.id - 3,
                paginationCountmax: +this.props.match.params.id + 1
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        window.scrollTo( 0, 0 );
        if (String(nextProps.match.params.id) === String(posts.data.length - 1)) {
            this.setState({
                paginationCountmin: +nextProps.match.params.id - 4,
                paginationCountmax: +nextProps.match.params.id 
            })
        } else if (String(nextProps.match.params.id) === String(posts.data.length)) {
            this.setState({
                paginationCountmin: posts.data.length - 5,
                paginationCountmax: posts.data.length - 1
            })
        } else if (Number(nextProps.match.params.id) < Number(3)) {
            this.setState({
                paginationCountmin: 0,
                paginationCountmax: 4
            })
        }
          else {
            this.setState({
                paginationCountmin: +nextProps.match.params.id - 3,
                paginationCountmax: +nextProps.match.params.id + 1
            })
        }    
    }
    render() {
        var post = posts.getItem(this.props.match.params.id);

        document.title = post.title;
        document.querySelector('meta[name="description"]').content = post.description;

        var disabled = {
            pointerEvents: 'none',
            color: 'grey'
        };
        var ondisabled = {
            color: 'black'
        }


        var tenItems = posts.getPagination(this.state.paginationCountmin, this.state.paginationCountmax);
        var pagination = tenItems.map((item, index) => {
            if (this.props.match.params.id == item.id) {
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

        var first;
        if (this.props.match.params.id == 1) {
            first = <Link to={'/detail/' + posts.data[0].id} style={disabled}>
                        <li>&lt; &lt; First</li>
                    </Link>
        } else {
            first = <Link to={'/detail/' + posts.data[0].id} style={ondisabled}>
                        <li>&lt; &lt; First</li>
                    </Link>
        }

        var previous;
        if (this.props.match.params.id == 1) {
            previous = <Link to={'/detail/' + 1} style={disabled}>
                           <li>&lt; Previous</li>
                       </Link>
        } else {
            previous = <Link to={'/detail/' + (this.props.match.params.id - 1)} style={ondisabled}>
                           <li>&lt; Previous</li>
                       </Link>
        }

        var next;
        if (this.props.match.params.id == posts.data.length) {
            next = <Link to={'/detail/' + (+this.props.match.params.id + 1)} style={disabled}>
                      <li>Next &gt;</li>
                   </Link>
        } else {
            next = <Link to={'/detail/' + (+this.props.match.params.id + 1)} style={ondisabled}>
                      <li>Next &gt;</li>
                   </Link>
        }

        var last;
        if (this.props.match.params.id == posts.data.length) {
            last = <Link to={'/detail/' + posts.data.length} style={disabled}>
                      <li>Last &gt; &gt;</li>
                   </Link>
        } else {
            last = <Link to={'/detail/' + posts.data.length} style={ondisabled}>
                      <li>Last &gt; &gt;</li>
                   </Link>
        }
        return (
          <div>
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
                    <DetailContent item={this.props.match.params.id}/>    
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