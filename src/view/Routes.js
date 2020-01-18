import React from 'react';
import {connect} from 'react-redux';
import AddUser from './userList/addUser/addUser';
import UserList from './userList/usersTable';
import UpdateUser from './userList/updateUser/infoForm';
import UpdatePost from './posts/updatePost';
import PostsTable from './posts';
import AddPost from './posts/addPost';
import SignIn from './login'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class Routes extends React.Component {
    render() {
        const PrivateRouteUsers = ({component: Component, ...rest})=> (
            <Route {...rest} render={(props)=> (
                this.props.data === 'SUCSSES'
              ? <Component {...props} />
              : <Redirect to='/' />
            )}/>
          )
          const PrivateRoutePosts = ({component: Component, ...rest})=> (
            <Route {...rest} render={(props)=> (
                this.props.data === 'SUCSSES'
              ? <Component {...props} />
              : <Redirect to='/' />
            )}/>
          )
          const PrivateRouteAddUser = ({component: Component, ...rest})=> (
            <Route {...rest} render={(props)=> (
                this.props.data === 'SUCSSES'
              ? <Component {...props} />
              : <Redirect to='/' />
            )}/>
          )
          const PrivateRouteAddPost = ({component: Component, ...rest})=> (
            <Route {...rest} render={(props)=> (
                this.props.data === 'SUCSSES'
              ? <Component {...props} />
              : <Redirect to='/' />
            )}/>
          )
          const PrivateRouteUpdatePost = ({component: Component, ...rest})=> (
            <Route {...rest} render={(props)=> (
                this.props.data === 'SUCSSES'
              ? <Component {...props} />
              : <Redirect to='/' />
            )}/>
          )
          const PrivateRouteUpdateUser = ({component: Component, ...rest})=> (
            <Route {...rest} render={(props)=> (
                this.props.data === 'SUCSSES'
              ? <Component {...props} />
              : <Redirect to='/' />
            )}/>
          )
        console.log('Routes', this.props.data)
        return(
            <BrowserRouter>
             <Switch>
                <Route exact path="/" component={SignIn}/>
                <PrivateRouteUsers exact path="/users" component={UserList}/>
                <PrivateRouteAddUser exact path="/users/add-user" component={AddUser}/>
                <PrivateRouteUpdateUser exact path="/users/update/:id" component={UpdateUser}/>
                <PrivateRoutePosts exact path="/posts" component={PostsTable}/>
                <PrivateRouteUpdatePost exact path="/posts/update/:id" component={UpdatePost}/>
                <PrivateRouteAddPost exact path="/posts/add-post" component={AddPost}/>
             </Switch>
            </BrowserRouter>
        );
    }
}
function mapStateToProps(state) {
    return {
      data: state
    }
  }
export default connect(mapStateToProps)(Routes);