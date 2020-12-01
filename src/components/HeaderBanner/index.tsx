import React from 'react';
import BannerImg from '../../assets/images/banner.png';

import { Container, Banner, Title} from './styles'

const HeaderBanner = () => {
	return (
		<Container>
			<Banner source={BannerImg} />
			<Title>
				BeeWork
			</Title>
		</Container>
	)
}
	
export default HeaderBanner;