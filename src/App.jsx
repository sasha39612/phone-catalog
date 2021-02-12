import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { PhoneCatalog} from './Commponents/PhoneCatalog';
import { Phone} from './Commponents/Phone';
import { PhoneProperty} from './Commponents/PhoneProperty';

function App() {

  return (
    <body>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <section>
              <p>
                Search:
                <input type="text" />
              </p>

              <p>
                Sort by:
                <select>
                  <option value="name">Alphabetical</option>
                  <option value="age">Newest</option>
                </select>
              </p>
            </section>

            <section>
              <p>Shopping Cart</p>
              <ul>
                <li>Phone 1</li>
                <li>Phone 2</li>
                <li>Phone 3</li>
              </ul>
            </section>
          </div>

          <div className="col-md-10">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={PhoneCatalog} />
                <Route path="/phone" component={Phone} />
                <Route path="/phoneProperty" component={PhoneProperty} />

                <p>Not found page</p>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
