import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
const Main = props =>{
	const {errors, authUser, removeError, currentUser} = props;
	return (
		<div className="container">
			<Switch>
				<Route 
					exact 
					path="/" 
					render={props=><Homepage {...props} currentUser={currentUser} /> }
				/>
				<Route 
					exact 
					path="/signin" 
					render={props=>{
						return(
							<AuthForm
								removeError={removeError} 
								errors={errors}
								onAuth={authUser} 
								buttonText="Log in" 
								heading="Welcome Back." 
								{...props}
							/>
						);
					}}
			  />
			  <Route 
			  	exact 
			  	path="/signup" 
			  	render={props=>{
						return(
							<AuthForm 
								removeError={removeError} 
								errors={errors}
								onAuth={authUser}
								signUp
								buttonText="Sign me up!" 
								heading="Join Warlber today."
								{...props}
							/>
						);
					}}
			  />
			  {/*<Route 
			  	path="/user/:id/messages/new" 
			  	component={withAuth(messageForm)}
			 	/>*/}
			</Switch>
		</div>
	)
}

function mapStateToProps(state){
	return{
		currentUser: state.currentUser,
		errors: state.errors
	};
}

export default withRouter(connect(mapStateToProps,{ authUser, removeError })(Main));