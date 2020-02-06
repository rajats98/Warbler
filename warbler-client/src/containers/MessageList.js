import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessage } from "../store/actions/messages";

class MessageList extends Component{
	componentDidMount(){
		this.props.fetchMessage();
	}
}

function mapStateToProps(state) {
	return {
		messages: state.messages
	};
}

export default connect(mapStateToProps, { fetchMessage })(MessageList);