import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { AdminService } from '../services/admin.service';

@Controller('blog/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getAuthors(): string {
    return this.adminService.getAuthors();
  }
  @Get(':id')
  getAuthor(): string {
    return this.adminService.getAuthor();
  }

  @Post(':id')
  createAuthor(): string {
    return this.adminService.createAuthor();
  }
  @Put(':id')
  updateAuthor(): string {
    return this.adminService.updateAuthor();
  }

  @Delete(':id')
  deleteAuthor(): string {
    return this.adminService.delAuthor();
  }
}
