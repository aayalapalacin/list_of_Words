import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log("params",params)
	let data = store[params.type][params.theid]
	console.log("data single",data);
	console.log("store",store)
	return (
		<div className="jumbotron">
			
			{params.type == "characters" ?
				<div className="container">
					<div className="row">
						<div className="col-6">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="singleImage" alt="..."/> 
						</div>
						<div className="col-6">
							<h1 className="font singleText">
							{data.name}
							</h1>
							<p className="font singleText">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor sapien, id porttitor leo. Pellentesque vulputate volutpat nibh, non sollicitudin nisi suscipit at. Aliquam egestas id ante vitae mattis. Nam scelerisque tempor nisl, vitae dapibus turpis egestas non. Nunc congue tincidunt metus nec vestibulum. Suspendisse potenti. Nam feugiat neque ac pharetra consequat.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<table class="table table-borderless">
								<thead>
									<tr>
										<th className="font" scope="col">Name</th>
										<th className="font" scope="col">Birth</th>
										<th className="font" scope="col">Gender</th>
										<th className="font" scope="col">Height</th>
										<th className="font" scope="col">Skin-color</th>
										<th className="font" scope="col">Mass</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="font" >{data.name}</td>
										<td className="font">{data.birth_year}</td>
										<td className="font">{data.gender}</td>
										<td className="font">{data.height}</td>
										<td className="font">{data.skin_color}</td>
										<td className="font">{data.mass}</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div>
				
				:
				params.type == "planets" ?
					<div className="container">
					<div className="row">
						<div className="col-6">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="singleImage" alt="..."/> 
						</div>
						<div className="col-6">
							<h1 className=" font singleText">
							{data.name} 
							</h1>
							<p className=" font singleText">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor sapien, id porttitor leo. Pellentesque vulputate volutpat nibh, non sollicitudin nisi suscipit at. Aliquam egestas id ante vitae mattis. Nam scelerisque tempor nisl, vitae dapibus turpis egestas non. Nunc congue tincidunt metus nec vestibulum. Suspendisse potenti. Nam feugiat neque ac pharetra consequat.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<table class="table table-borderless">
								<thead>
									<tr>
									<th scope="col">Name</th>
										<th className="font" scope="col">Climate</th>
										<th className="font" scope="col">Terrain</th>
										<th className="font" scope="col">Population</th>
										<th className="font" scope="col">Diameter</th>
										<th className="font" scope="col">Gravity</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="font">{data.name}</td>
										<td className="font">{data.climate}</td>
										<td className="font">{data.terrain}</td>
										<td className="font">{data.population}</td>
										<td className="font">{data.diameter}</td>
										<td className="font">{data.gravity}</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div> 
					:
					params.type == "vehicles" ?
					<div className="container">
					<div className="row">
						<div className="col-6">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnr3avebwcV911YoWbSC0l8HwMo59SwE7CA&usqp=CAU" className="singleImage" alt="..."/> 
						</div>
						<div className="col-6">
							<h1 className=" font singleText">
							{data.name}
							</h1>
							<p className=" font singleText">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non porttitor sapien, id porttitor leo. Pellentesque vulputate volutpat nibh, non sollicitudin nisi suscipit at. Aliquam egestas id ante vitae mattis. Nam scelerisque tempor nisl, vitae dapibus turpis egestas non. Nunc congue tincidunt metus nec vestibulum. Suspendisse potenti. Nam feugiat neque ac pharetra consequat.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<table class="table table-borderless">
								<thead>
									<tr>
										<th className="font" scope="col">Name</th>
										<th className="font" scope="col">Model</th>
										<th className="font" scope="col">Cost</th>
										<th className="font" scope="col">Speed</th>
										<th className="font" scope="col">Passengers</th>
										<th className="font" scope="col">Class</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="font">{data.name}</td>
										<td className="font">{data.model}</td>
										<td className="font">{data.cost_in_credits}</td>
										<td className="font">{data.max_atmosphering_speed}</td>
										<td className="font">{data.passengers}</td>
										<td className="font">{data.vehicle_class}</td>
									</tr>
								</tbody>
							</table>
						</div>						
					</div>
				</div> :
						<p>data not found</p>}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
