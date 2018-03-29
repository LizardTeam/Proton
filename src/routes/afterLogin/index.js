/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import afterlogin from './afterLogin';
import Layout from '../../components/Layout';

  const title = 'LoggedIn'

  function action() {
  return {
    title: 'Proton',
    chunks: ['afterlogin'],
    component: (
      <Layout>
        <afterLogin title={title}/>
      </Layout>
    ),
  };
}

export default action;
