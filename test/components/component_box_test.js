import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a comment-test class', () => {
    expect(component.find('textarea')).to.have.class('comment-test');
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
