import React from 'react';
import * as Bts from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';


export default function Home() {
    return (
    	<Bts.Container>
    		<Bts.Row>
    			<Bts.Col>
    				<Bts.Alert variant="success">
    					<Bts.Alert.Heading>
    						Alert!
    					</Bts.Alert.Heading>
    					<hr />
    					<p class="brocolis">
    						Testing bootstrap!
    					</p>
    				</Bts.Alert>
    			</Bts.Col>
    		</Bts.Row>
	        <Bts.Row>
	            <Bts.Col>
	            	<Bts.Button variant="primary" size="lg" type="submit">Click here</Bts.Button>{' '}
	            </Bts.Col>
	        </Bts.Row>
	    </Bts.Container>
    )
}
