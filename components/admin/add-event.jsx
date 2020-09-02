import React, { useState } from "react";
import { useRouter } from "next/router";
import Progressbar from "../progress";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEvent = ({ user, add_event }) => {
  const router = new useRouter();
  if (user && user.stuff) {
    const [event, setEvent] = useState({
      title: "",
      venue: "",
      description: "",
    });

    const [state, setState] = useState({
      startDate: new Date(),
    });

    const [file, setFile] = useState("");
    const [fileUploadPercentage, setFileUploadPercentage] = useState(0);

    const handleFormSubmission = (e) => {
      e.preventDefault();
      const postEvent = new FormData();
      postEvent.append("file", file);
      postEvent.append("date", state.startDate);
      postEvent.append("title", event.title);
      postEvent.append("venue", event.venue);
      postEvent.append("description", event.description);
      add_event(
        postEvent,
        router,
        setFileUploadPercentage,
        fileUploadPercentage
      );
    };

    const handleInputChange = (e) => {
      setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const handleFileUpload = (e) => {
      setFile(e.target.files[0]);
    };

    const { title, venue, description } = event;

    return (
      <div className='content'>
        <div className='container'>
          <div className='tab-content'>
            <div className='tab-pane fade show active'>
              <form
                onSubmit={handleFormSubmission}
                className='profile__form'
                style={{ maxWidth: "50rem", margin: "auto" }}
              >
                <div className='row'>
                  <div className='col-12'>
                    <h4 className='profile__title'>Add New Event</h4>
                  </div>

                  <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                    <div className='profile__group'>
                      <label className='profile__label' htmlFor='title'>
                        Title
                      </label>
                      <input
                        type='text'
                        className='profile__input'
                        name='title'
                        id='title'
                        placeholder='Promotion Title'
                        value={title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                    <div className='profile__group'>
                      <label className='profile__label' htmlFor='venue'>
                        Venue
                      </label>
                      <input
                        type='text'
                        className='profile__input'
                        name='venue'
                        id='venue'
                        placeholder='Event Venue'
                        value={venue}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                    <div className='profile__group'>
                      <label className='profile__label' htmlFor='releaseDate'>
                        Event Date
                      </label>
                      <DatePicker
                        selected={state.startDate}
                        onChange={(date) =>
                          setState({ ...state, startDate: date })
                        }
                        className='profile__input'
                        name='releaseDate'
                        id='releaseDate'
                        value={state.startDate}
                      />
                    </div>
                  </div>

                  <div className='col-12 col-md-6 col-lg-12 col-xl-6'>
                    <div className='profile__group'>
                      <label className='profile__label' htmlFor='file'>
                        Event Poster
                      </label>
                      <input
                        type='file'
                        className='profile__textarea'
                        name='file'
                        id='file'
                        onChange={handleFileUpload}
                        required
                      />
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='profile__group'>
                      <label className='profile__label' htmlFor='description'>
                        Event Info
                      </label>
                      <textarea
                        type='text'
                        className='profile__textarea'
                        id='description'
                        name='description'
                        value={description}
                        placeholder='Add event info...'
                        col='1'
                        row='30'
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className='col-12'>
                    {file && fileUploadPercentage > 0 && (
                      <div className='form-group'>
                        <label className='profile__label'>
                          Uploaded {fileUploadPercentage}%
                        </label>
                        <Progressbar percentage={fileUploadPercentage} />
                      </div>
                    )}
                  </div>

                  <div className='col-12'>
                    <button className='profile__btn' type='submit'>
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default AddEvent;
