import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Blogpost extends Component {

	constructor(props) {
		super(props);
		this.props.blok.title = this.props.blok.title;
		this.props.blok.tagline = this.props.blok.slogan;
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["blogpost-page__main-content"]}>
						<div id="blogpost-page__short-description" key="blogpost-page__short-description" className={css["blogpost-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>{this.props.title}</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.content })}</div>
							</section>
						</div>
					</div>

				</main>
			</div>
		);

	}
}