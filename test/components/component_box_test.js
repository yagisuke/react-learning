import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox' , () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox);

    expect(component.find('textarea')).to.exist;
  });

  it('has a comment-test class', () => {
    const component = renderComponent(CommentBox);

    expect(component.find('textarea')).to.have.class('comment-test');
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);

    expect(component.find('button')).to.exist;
  });
});
