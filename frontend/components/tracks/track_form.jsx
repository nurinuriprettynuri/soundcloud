import React from "react";
import SessionButtonContainer from "../session_button/session_button_container";

class TrackForm extends React.Component {
  componentDidMount() {
    this.props.fetchAllTags();
    if (this.props.formType === "Update Form") {
      this.props
        .fetchTrack(this.props.match.params.trackId)
        .then(() => this.setState(this.props.track));
    }
  }

  constructor(props) {
    super(props);
    this.state = this.props.track;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
    this.handleAudioFile = this.handleAudioFile.bind(this);
  }

  handleImageFile(e) {
    const image = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        image: image,
        imageUrl: fileReader.result
      });
    };
    if (image) {
      fileReader.readAsDataURL(image);
    }
  }

  handleAudioFile(e) {
    const audio = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        audio: audio
      });
    };
    if (audio) {
      fileReader.readAsDataURL(audio);
    }
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[artist_id]", this.state.artist_id);
    formData.append("track[tag_id]", this.state.tag_id);
    if (this.state.image) {
      formData.append("track[image]", this.state.image);
    }
    if (this.state.audio) {
      formData.append("track[audio]", this.state.audio);
    }
    this.props
      .action(formData, this.props.track.id)
      .then(res => this.props.history.push("/tracks"));
  }

  render() {
    return (
      <>
        <SessionButtonContainer />
        <div className="index-container">
          <div className="track-form-container">
            <form onSubmit={this.handleSubmit} class="track-form">
              <p className="form-type">{this.props.formType}</p>
              <div className="track-form-columns">
                <div className="track-form-left">
                  <img
                    className="track-img-preview"
                    src={this.state.imageUrl}
                  />
                  <p className="track-para">Image:</p>
                  <br />
                  <input
                    className="track-para"
                    type="file"
                    onChange={this.handleImageFile}
                  />
                  <p className="track-para">Audio:</p>
                  <br />
                  <input
                    className="track-para"
                    type="file"
                    onChange={this.handleAudioFile}
                  />
                </div>
                <div className="track-form-right">
                  <label className="track-para">
                    Title
                    <br />
                    <input
                      className="track-form-input"
                      type="text"
                      value={this.state.title}
                      onChange={this.update("title")}
                      placeholder="Name your track"
                    />
                  </label>
                  <label className="track-para">
                    Genre
                    <br />
                    <select
                      className="select-box"
                      onChange={this.update("tag_id")}
                      value={this.state.tag_id}
                    >
                      <option />
                      {this.props.tags.map(tag => (
                        <option key={Math.random()} value={tag.id}>
                          {tag.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <input
                    type="submit"
                    value="Upload"
                    className="track-submit-button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default TrackForm;
