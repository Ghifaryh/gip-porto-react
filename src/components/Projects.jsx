import TitleOne from "../UI/TitleOne"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { ProjectsData } from "../data/Data"

import { GoArrowRight, GoArrowLeft } from "react-icons/go"

export default function Projects() {
	// Responsive Breakpoints
	const breakpoints = {
		0: {
			spaceBetween: 0,
			slidesPerView: 1,
		},
		600: {
			spaceBetween: 30,
			slidesPerView: 2,
		},
		1024: {
			spaceBetween: 60,
			slidesPerView: 3,
		},
	}

	return (
		<section id="Projects">
			<div className="container projects-container">
				<TitleOne
					titleSm={"Recent Projects"}
					title={"My Recent "}
					titleEx="Projects"
					className={"projects-title"}
				/>
				<Swiper
					className="projects-wrapper"
					breakpoints={breakpoints}
					loop={true}
					modules={[Navigation]}
					navigation={{
						prevEl: ".button-prev-slide",
						nextEl: ".button-next-slide",
					}}
				>
					{ProjectsData.map(
						({ projectImage, title, category, info, projectLink }, index) => {
							return (
								<SwiperSlide key={index}>
									<article className="projects-article">
										<div className="project-image">
											<img src={projectImage} alt={title} />
										</div>
										<p className="category">{category}</p>
										<h5>{title}</h5>
										<small>{info}</small>
										<a href={projectLink} target="_blank" rel="noreferrer">
											View Projects <GoArrowRight />{" "}
										</a>
									</article>
								</SwiperSlide>
							)
						}
					)}
					<div className="navigation-buttons">
						<button className="button-prev-slide">
							<GoArrowLeft />
						</button>
						<button className="button-next-slide">
							<GoArrowRight />
						</button>
					</div>
				</Swiper>

				{/* <a href="" className="btn btn-danger Explore-btn">
          Explore More
        </a> */}
			</div>
		</section>
	)
}
