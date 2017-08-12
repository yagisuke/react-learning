import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('App' , () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other new comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an Li for each comment', () => {

  });

  it('shows each comment that is provide', () => {

  });
});
