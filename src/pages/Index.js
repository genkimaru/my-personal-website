import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">关于本网站</Link></h2>
          <p>
            一个美丽的、响应迅速的、静态生成的、
            使用现代 Javascrip 编写的 react 应用程序
          </p>
        </div>
      </header>
      <p> 欢迎来到本网站，浏览其他页面，
        <Link to="/resume">简历</Link>, {' '}
        <Link to="/projects">项目</Link>, {' '}
        <Link to="/stats">统计</Link>, {' '}
        或者 <Link to="/contact">联系我</Link> .
      </p>
      <p> 查看源代码 <a href="https://github.com/genkimaru/my-personal-site">这里</a>.</p>
    </article>
  </Main>
);

export default Index;
