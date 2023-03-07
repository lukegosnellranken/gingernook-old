import React from "react";
import Content from '../content/Content'
import { articles } from '../../articles/Article';

function ContentArea() {
    return (
        <div>
        <Content
            title = {articles[0][1].title}
            article = {articles[0][1].body}
        />
        <Content
            title = {articles[0][2].title}
            article = {articles[0][2].body}
        />
        </div>
    )
}

export default ContentArea;