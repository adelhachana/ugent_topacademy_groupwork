import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import { storyblokEditable } from "@storyblok/react";
import {RichTextToHTML} from "../../../functions/storyBlokRichTextRenderer";

export default class Blogpost extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div {...storyblokEditable(this.props.blok)} className={css["Blogpostitem"]}>
					<Headermenu blok={this.props.menu.content}></Headermenu>

					<div className={css["Blogpostheader"]}>
						<span className={css["Blogpostdate"]}>{this.props.blok.date}</span>
						<span className={css["Blogposttitle"]}>{this.props.blok.title}</span>
					</div>
					<div className={css["Blogpostitemcontent"]}>
						{RichTextToHTML({ document: this.props.blok.description })}
					</div>
					</div>

			
			
		);
	}
}