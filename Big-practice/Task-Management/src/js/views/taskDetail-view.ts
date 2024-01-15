import {
  CONFIRM_MESSAGE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE
} from '../constants/message';
import TaskDetailTemplate from '../templates/taskDetail-template';
import date from '../utilities/date';
import showSuccessMessage from '../utilities/showMessage';

export default class TaskDetailView {
  private detailContainer: HTMLElement;
  private addDesc: HTMLElement;
  private editIcon: HTMLElement;
  private dueDateInput: HTMLElement;
  private inputComment: HTMLElement;
  private commentList: HTMLElement;
  private updateData: any;

  public bindUpdateTask(handle: any): void {
    this.detailContainer = document.querySelector(
      '.detail-task-container'
    ) as HTMLElement;
    this.addDesc = this.detailContainer.querySelector(
      '.add-description'
    ) as HTMLElement;
    this.editIcon = this.detailContainer.querySelector(
      '.edit-icon'
    ) as HTMLElement;
    this.dueDateInput = this.detailContainer.querySelector(
      '.date-select'
    ) as HTMLElement;
    this.inputComment = this.detailContainer.querySelector(
      '.comments-input'
    ) as HTMLElement;
    this.commentList = this.detailContainer.querySelector(
      '.comment-list'
    ) as HTMLElement;

    if (this.addDesc && this.editIcon) {
      this.editIcon.addEventListener('click', (e: Event) => {
        e.preventDefault();
        this.focusEditDescripton(this.addDesc);
      });

      this.addDesc.addEventListener('blur', (e: Event) => {
        e.preventDefault();
        this.editDescription(handle);
      });
    }

    if (this.dueDateInput) {
      this.dueDateInput.addEventListener('change', (e: Event) => {
        this.changeDueDate(handle, e);
      });
    }
  }

  // Event for icon edit
  private focusEditDescripton(element: HTMLElement): void {
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  // Event when click to input
  private editDescription(handle: any): void {
    const description = this.addDesc.textContent;
    const id = this.detailContainer.dataset.id;
    const { data } = handle(id, { description });

    try {
      this.updateData = { ...this.updateData, ...data };
    } catch (error) {
      alert(ERROR_MESSAGE.ADD_FAIL);
    }
  }

  // Event when change date
  private changeDueDate(handle: any, event: Event): void {
    const id = this.detailContainer.dataset.id;
    const newDueDate = date.formatDate(
      (event.target as HTMLInputElement).value
    );
    const { data } = handle(id, { dueDate: newDueDate });
    this.updateData = { ...this.updateData, ...data };

    // Update date for task item
    const taskItem = document.querySelector(
      `.task-item-container[data-id="${id}"]`
    ) as HTMLElement;

    if (!taskItem) return;

    const dueDateElement = taskItem.querySelector('.due-date') as HTMLElement;

    if (!dueDateElement) return;

    dueDateElement.innerHTML = date.diffTime(newDueDate, Math.ceil, 'left');

    // Update date for task detail
    const daysRemainingElement = document.querySelector(
      '.daysRemaining'
    ) as HTMLElement;

    if (!daysRemainingElement) return;

    daysRemainingElement.innerHTML = date.diffTime(
      newDueDate,
      Math.ceil,
      'left'
    );
  }

  // HANDLER COMMENTS
  public bindComments(handleAddComment: any): void {
    if (!this.inputComment) return;

    this.inputComment.addEventListener('keydown', async (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      e.preventDefault();

      const commentValue = (this.inputComment as HTMLInputElement).value.trim();
      const taskId = this.detailContainer.dataset.id || ' ';

      if (!commentValue) return alert(ERROR_MESSAGE.COMMENT_EMPTY);

      const data = await handleAddComment(commentValue, +taskId);
      this.showComments(data);
      (this.inputComment as HTMLInputElement).value = '';
      showSuccessMessage(SUCCESS_MESSAGE.COMMENT_SUCCESS);
    });
  }

  // showComments(data: Comments)
  private showComments(data: any): void {
    this.commentList.innerHTML += TaskDetailTemplate.renderComment([data]);
  }

  public deleteComment(handleDelete: any): void {
    this.commentList.addEventListener('click', async (e: Event) => {
      const deleteComment = (e.target as HTMLElement).closest('.delete-icon');

      if (!deleteComment) return;

      const commentItem = (e.target as HTMLElement).closest(
        '.commenters'
      ) as HTMLElement;

      if (!commentItem) return;

      // Save id item
      const commentId = commentItem.dataset.id;
      const userConfirmed = confirm(CONFIRM_MESSAGE.DELETE_COMMENT);

      if (!userConfirmed) return;

      try {
        const status = await handleDelete(commentId);

        if (status !== 200) return alert(ERROR_MESSAGE.DELETE_FAIL);

        commentItem.remove();
        showSuccessMessage(SUCCESS_MESSAGE.DELETE_COMMENT_SUCCESS);
      } catch (error) {
        alert(error);
      }
    });
  }
}
