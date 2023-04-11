import React from 'react'
import myImage from './img.jpeg'

function Home() {
  return (
    <div>

        

	<div class="container">
		<div class="profile">
			<div class="profile_container">
				<div class="profile_img">
					<img src={myImage} alt="sharon Sanjana"></img>
				</div>
			</div>
			<div class="namendes">
				<h1 class="profile_name">
					Sharon Sanjana S
				</h1>
				<p class="profile_title">Software Developer</p>
			    <p class="description">I am a B.E CSE degree holder.I have done many paper presentations  <br></br> and have high interest in coding. I am very
					friendly which makes  <br></br> it easier for me to work with developers to  <br></br> design algorithms and flowcharts.I can fix and debug programs .
				</p>
				
			</div>


		</div>
		
		<div class="main">
			<div class="aoe">
			    <div class="aoe-title">
				   <b>Areas Of Expertise</b>
				</div>
                <div class="aoe-body">
			       <ul>
				        <li>HTML</li>
				        <li>CSS</li>
				        <li>JAVASCRIPT</li>
			            <li>C Language</li>
			       </ul>
			    </div>
			</div>
			
            <div class="we">
				<div class="we-title">
					<b>Work Experience</b>
				</div>
				<div class="we-body">
					 <br></br> SOFTWARE ENGINEER  <br></br> -stored, retrived and manipulated data <br></br> 
					-drafted detailed reports <br></br> -tested multiple softwawres
				</div>
			</div>
			<div class="gic">
				<div class="get-title">
					<div class="get-body">
						
					</div>
				</div>
			</div>
		</div>
	</div>


    </div>
  )
}

export default Home