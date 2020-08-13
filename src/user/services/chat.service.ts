import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  createComments(): string {
    return 'createComments!';
  }
  updateComments(): string {
    return 'updateComments!';
  }
  deleteComments(): string {
    return 'delComments!';
  }
}
