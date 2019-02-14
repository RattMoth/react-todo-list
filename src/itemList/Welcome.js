import React from 'react';

const Welcome = ({ changeRoute }) => {
  return (
    <div
      id="welcome"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <main>
        <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3 ttc">
            Welcome to your new personal assistant.
          </h1>
          <h2 className="fw2 f4 lh-copy mt0 mb3">
            Simplify your life. Bring order to your never-ending to-do list.
          </h2>
          <p className="fw1 f5 mt0 mb3">Click Enter below to try it out</p>
          <div>
            <button
              className="f6 bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3 br2"
              onClick={() => changeRoute('home')}
            >
              Enter
            </button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Welcome;
