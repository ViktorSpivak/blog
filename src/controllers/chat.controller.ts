import { Controller, Get, Post, Delete } from '@nestjs/common';
import { ChatService } from '../services/chat.service';

@Controller('blog/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post(':id')
  updatePost(): string {
    return this.chatService.updateComments();
  }

  @Post(':id')
  createPost(): string {
    return this.chatService.createComments();
  }

  @Delete(':id')
  deletePost(): string {
    return this.chatService.deleteComments();
  }
}
