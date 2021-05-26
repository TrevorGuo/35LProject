import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';
import Post from '../components/post/Post';
import Group from '../components/group/Group';

import CircularProgress from '@material-ui/core/CircularProgress';

class groups extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    const classes = this.props;

    let recentPostsMarkup = loading ? (
      <CircularProgress size={30} className={classes.progress} />
    ) : (
      posts.map((post) => <Post key={post.postId} post={post} />)
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentPostsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Group />
        </Grid>
      </Grid>
    );
  }
}

groups.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getPosts })(groups);
