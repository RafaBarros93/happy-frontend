import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import Local from '../../images/local.svg'

import './list-page.css'
import 'leaflet/dist/leaflet.css'

function List() {
	return (
		<div id="page-list">
			<aside>
				<header>
					<img src={Local} alt="map" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Contagem</strong>
					<strong>Minas Gerais</strong>
				</footer>
			</aside>

			<Map center={[-19.8910492, -44.1539678]} zoom={15} style={{ width: '100%', height: '100%' }}>
				{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

				<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
			</Map>

			<Link to="" className="create-orpahange">
				<FiPlus size={32} color="#fff" />
			</Link>
		</div>
	)
}

export default List
