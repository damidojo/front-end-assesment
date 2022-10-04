import image1 from './image1.png'
import './App.css';
import React from 'react';

function App() {
  return (
    <IPadPro11

      imagineIfHadEvents={
        <React.Fragment>
          Imagine if
          <br />
        </React.Fragment>
      }
      snapchat="Snapchat"
      easilyHostAndShar="Easily host and share events with your friends across any social media."
      image1={image1}
      createMyEvent="🎉 Create my event"
    />
  );
}

function IPadPro11(props) {
  const { imagineIfHadEvents, snapchat, easilyHostAndShar, image1, createMyEvent } = props

  return (
    <div
      className='container-center-horizontal'
    >
      <div
        className='ipad-pro-11-1 screen'
      >
        <div
          className='heading-text'
        >
          <div
            className='heading'
          >
            <div
              className='overlap-group'
            >
              <h1
                className='image-if-had-events'
                style={{
                  textAlign: 'center'
                }}
              >
                {imagineIfHadEvents}
              </h1>
              <div
                className='snapchat'
              >
                {snapchat}

              </div>
              <h1
                className='image-if-had-events'
                style={{
                  textAlign: 'center'
                }}
              >
                had any events.
              </h1>

            </div>

          </div>
          <div
            className='easily-host-and-shar'
            style={{
              marginTop: '30px'
            }}
          >
            {easilyHostAndShar}
          </div>
        </div>
        <img
          className='image-1'
          src={image1}
          alt="image 1"
        />
        <div
          className='create-my-event button'
        >
          {createMyEvent}
        </div>
      </div>
    </div>
  )
}

export default App;
