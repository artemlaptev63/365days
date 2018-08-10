import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    // состояние лайка берем из localStorage
    this.state = { like: localStorage.getItem(this.props.item.id) };
  }

  // метод для сохранения состояния лайка
  like() {
    // если условие верно устанавливаем состояние лайка true
    // и записываем состояние в localStorage
    if (String(this.state.like) === "null") {
      this.setState({ like: "true" });
      localStorage.setItem(this.props.item.id, "true");
      // в противном случае устанавливаем состояние лайка null
      // и записываем состояние в localStorage
    } else {
      this.setState({ like: "null" });
      localStorage.setItem(this.props.item.id, "null");
    }
  }

  // метод вызывается перед render
  componentWillMount() {
    // заносим данные в localStorage
    localStorage.setItem(
      this.props.item.id,
      localStorage.getItem(this.props.item.id)
    );
    // изменяем state
    this.setState({
      like: localStorage.getItem(this.props.item.id)
    });
  }

  render() {
    // в зависимости от состояния выводим картинку лайка
    let likeIcon;
    if (this.state.like !== "true") {
      likeIcon = "assets/heart-false.png";
    } else {
      likeIcon = "assets/heart-true.png";
    }

    // классы для img-like с четными и нечетными id
    let likeStyle;
    if (this.props.item.id % 2 === 0) {
      likeStyle = "left-item-like";
    } else {
      likeStyle = "right-item-like";
    }

    // записываем в переменные img (в листе выводим 4 фото)
    var mainPhotoItem = {
      background: "url(../assets/" + this.props.item.mainImage + ") no-repeat"
    };
    var secondaryPhoto1 = {
      background: "url(../assets/" + this.props.item.image1 + ") no-repeat"
    };
    var secondaryPhoto2 = {
      background: "url(../assets/" + this.props.item.image2 + ") no-repeat"
    };
    var secondaryPhoto3 = {
      background: "url(../assets/" + this.props.item.image3 + ") no-repeat"
    };

    // чередуем возвращаемую разметку
    let item;
    if (this.props.item.id % 2 === 0) {
      item = (
        <div className="left-item">
          <div className="delimiter" />
          <div className="flex">
            <Link className="main-photo-link" to={this.props.path}>
              <div className="main-photo" style={mainPhotoItem}>
                <p className="photos-number-left">#{this.props.item.id}</p>
                <p className="link-to-detail-left">View Gallery</p>
              </div>
            </Link>
            <div>
              <div className="secondary-photo-left">
                <Link to={this.props.path}>
                  <p style={secondaryPhoto1} />
                </Link>
              </div>
              <div className="secondary-photo-left">
                <Link to={this.props.path}>
                  <p style={secondaryPhoto2} />
                </Link>
              </div>
              <div className="secondary-photo-left">
                <Link to={this.props.path}>
                  <p style={secondaryPhoto3} />
                </Link>
              </div>
            </div>
            <div className="about-image-left-item">
              <p>
                <b>By {this.props.item.autor}</b>
                <br />
                <i>{this.props.item.country}</i>
              </p>
              <img
                onClick={this.like.bind(this)}
                className={likeStyle}
                src={likeIcon}
                alt="like"
              />
            </div>
          </div>
        </div>
      );
    } else {
      item = (
        <div className="right-item">
          <div className="delimiter" />
          <div className="flex">
            <div className="about-image-right-item">
              <p>
                <b>By {this.props.item.autor}</b>
                <br />
                <i>{this.props.item.country}</i>
              </p>
              <img
                onClick={this.like.bind(this)}
                className={likeStyle}
                src={likeIcon}
                alt="like"
              />
            </div>
            <div>
              <div className="secondary-photo-right">
                <Link to={this.props.path}>
                  <p style={secondaryPhoto1} />
                </Link>
              </div>
              <div className="secondary-photo-right">
                <Link to={this.props.path}>
                  <p style={secondaryPhoto2} />
                </Link>
              </div>
              <div className="secondary-photo-right">
                <Link to={this.props.path}>
                  <p style={secondaryPhoto3} />
                </Link>
              </div>
            </div>
            <Link className="main-photo-link" to={this.props.path}>
              <div className="main-photo" style={mainPhotoItem}>
                <p className="photos-number-right">#{this.props.item.id}</p>
                <p className="link-to-detail-right">View Gallery</p>
              </div>
            </Link>
          </div>
        </div>
      );
    }
    return <div>{item}</div>;
  }
}

export default ListItem;
