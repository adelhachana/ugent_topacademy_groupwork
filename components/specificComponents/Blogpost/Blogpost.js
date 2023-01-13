import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default class Blogpost extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["wrapper"]}>
					<div className={css["content"]}>
						<div className={[css["box"], css["head"]].join(" ")}>
							<h1>{this.props.blok.title} {this.props.blok.lastname} {this.props.blok.firstname}</h1>
						</div>
						<div className={[css["box"], css["sidebar"]].join(" ")}>
							<div className={css["blogpostimage"]}><img src={this.props.blok.image.filename} /></div>
							<div className={css["blogpostdetails"]}>
								<div className={css["blogpostdetailitem"]}>{this.props.blok.title} {this.props.blok.firstname} {this.props.blok.lastname}</div>
								<div className={css["blogpostdetailitem"]}>{this.props.blok.dateofbirth}</div>
								<div className={css["blogpostdetailitem"]}>{this.props.blok.location}</div>
							</div>
						</div>
						<div className={[css["box"], css["experience"]].join(" ")}>
							<h2>Experience</h2>
							{this.props.blok.experiences.map((nestedBlok) => (
								<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
							))}
						</div>
						<div className={[css["box"], css["foot"]].join(" ")}>
							<div>&copy; {this.props.blok.firstname} {this.props.blok.lastname} {new Date().getFullYear()}</div>
						</div>
					</div>
				</div>
			</>
		);
		
	}
}