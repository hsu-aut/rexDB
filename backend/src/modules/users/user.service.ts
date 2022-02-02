import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export class User {
	id: number;
	username: string;
	password: string;
}

@Injectable()
export class UserService {
	// TODO: This is just some dummy data
	private readonly users: User[] = [
		{
			id: 1,
			username: 'admin',
			password: 'admin',
		},
		{
			id: 2,
			username: 'test',
			password: 'test',
		},
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find(user => user.username === username);
	}
}