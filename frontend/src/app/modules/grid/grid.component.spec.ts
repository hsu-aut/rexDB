import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { GridComponent } from './grid.component';
import { GridModule } from './grid.module';

describe('GridComponent', () => {
	let component: GridComponent;
	let fixture: ComponentFixture<GridComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [GridModule, RouterTestingModule, BrowserAnimationsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
