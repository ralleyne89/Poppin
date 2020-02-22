import React from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';
import { ImageUrl } from '../../API';

const GridCards = props => {
    let { actor, key, image, movieId, movieName, characterName } = props
    const PosterSize = "w154";

    if (actor) {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <img style={{ width: '100%', height: '320px' }} alt={characterName} src={`${ImageUrl}${PosterSize}${image}`} />
                </div>
            </Col>
        )
    } else {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{ width: '100%', height: '320px' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }
}

export default GridCards