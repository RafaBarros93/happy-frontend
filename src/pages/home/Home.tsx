import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

import './landing.css'

export default function Home() {
	return (
		<div id="page-lading">
			<div className="content-wrapper">
				<img src={logo} alt="happy" />

				<main>
					<h1>Leve felicidade para o mundo</h1>
					<p>Visite orfanatos e mude o dia de muitas crianças.</p>

					<div className="location">
						<strong>Contagem</strong>
						<span>Minas Gerais</span>
					</div>

					<Link to="/list" className="enter-app">
						<FiArrowRight size={26} color="rgaba(0,0,0,0.6)" />
					</Link>
				</main>
			</div>
		</div>
	)
}
