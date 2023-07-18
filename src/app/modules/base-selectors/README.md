# Building a inhereted selector

Use cases: A generic base selector will be built that loads options depending on the injected service and model.
Other selectors can inherit this base selector to inject the chosen service/model.
The selector component is based on primeNG.

Base selector:

```html
<p-dropdown [formControl]="control" [options]="options"></p-dropdown>
```

```ts
import { Component, Input, OnInit } from '@angular/core';
import { BaseModel } from '../../models/base.model';
import { firstValueFrom } from 'rxjs';
import { FilterResponseModel } from '../../models/filter-response.model';
import { BaseService } from '../../services/base/base.service';
import { SelectItem } from 'primeng/api';

@Component({ template: '' })
export abstract class BaseSelector<T extends BaseModel> implements OnInit {

	@Input() control: any;
	@Input() options: SelectItem[] = [];

	isLoading = false;

	@Input() skipOptionsLoad = false;

	// Property of T that should be viewed as value
	@Input() dataValue: keyof T = 'id';
	// Property of T that should be viewed as label
	@Input() dataLabel: keyof T = 'name';

	constructor(private service: BaseService<T> | null) {
	}

	ngOnInit() {
		this.loadOptions();
	}

	private parseOptions(options: FilterResponseModel<T>): SelectItem[] {
		type ObjectKey = keyof T;

		return options?.tableData.map((x) => {
			// dataLabel has to be a property of T where the value is a string
			let label: T[keyof T] | string = x[this.dataLabel as ObjectKey];
			if (typeof label !== 'string') {
				label = '';
			}

			return {
				value: x.id,
				label: label
			};
		})
	}
	private loadOptions() {
		if (this.service == null) {
			return;
		}

		const baseFilter = new BaseFilterModel({
			paginated: false,
			columnOrderByDir: 'ASC',
			columnOrderBy: this.dataLabel as string
		});
		firstValueFrom(this.service.getWithHeaderQuery(baseFilter)).then(options => {
			this.options = this.parseOptions(options);
		});
	}

}

```

Let's say we have a OwnerModel as example:

```ts
import { BaseModel } from "../base.model";

export class OwnerModel extends BaseModel {
	override id!: number;

	constructor(props?: Partial<OwnerModel>) {
		super(props);

		if(props?.id == null){
			this.id = 0;
		}
	}
}
```

And a BaseService:
```ts
import { Injectable } from '@angular/core';
import { BaseModel } from '../../models/base.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseFilterModel } from '../../models/base-filter.model';
import { format } from 'date-fns';
import { FilterResponseModel } from '../../models/filter-response.model';

@Injectable({
	providedIn: 'root'
})
export class BaseService<T extends BaseModel> {
	protected ENDPOINT: any;

	constructor(protected http: HttpClient) { }

	setEndpoint(endpoint: string) {
		this.ENDPOINT = endpoint;
	}

	protected getUrlParamsFromObject(params: object): HttpParams {
		let httpParams = new HttpParams();
		if (!params) {
			return httpParams;
		}
		Object.entries(params).forEach(([key, value]) => {
			if (value == null) {
				return;
			}
			if (value instanceof Date) {
				value = format(value, 'YYYY-MM-DD');
			}
			if (Array.isArray(value)) {
				(value as any[]).forEach((x) => {
					httpParams = httpParams.append(key, x);
				});
			} else {
				httpParams = httpParams.set(key, value);
			}
		});
		return httpParams;
	}

	get(): Observable<T> {
		const endpoint = `${environment.api}/${this.ENDPOINT}`;
		return this.http.get<T>(endpoint);
	}

	getWithRouteQuery(routeProperty: number | string | boolean): Observable<T> {
		const endpoint = `${environment.api}/${this.ENDPOINT}/${routeProperty}`;
		return this.http.get<T>(endpoint);
	}

	getWithHeaderQuery(filter: BaseFilterModel): Observable<FilterResponseModel<T>> {
		const endpoint = `${environment.api}/${this.ENDPOINT}`;
		const params = this.getUrlParamsFromObject(filter);
		return this.http.get<FilterResponseModel<T>>(endpoint, {
			params
		});
	}

	post(data: T): Observable<any> {
		const endpoint = `${environment.api}/${this.ENDPOINT}`;
		return this.http.post(endpoint, data);
	}

	update(data: T): Observable<any> {
		const endpoint = `${environment.api}/${this.ENDPOINT}`;
		return this.http.put(endpoint, data);
	}

	delete(id: number) {
		const endpoint = `${environment.api}/${this.ENDPOINT}/${id}`;
		return this.http.delete(endpoint);
	}

	mockData() {
		return new Observable<T>((subscriber) => {
			setTimeout(() => {
				subscriber.next({} as T);
				subscriber.complete();
			}, 2000);
		})
	}

	mockDataList() {
		return new Observable<FilterResponseModel<T>>((subscriber) => {
			setTimeout(() => {
				subscriber.next(new FilterResponseModel());
				subscriber.complete();
			}, 2000);
		})
	}

}
```
It's possible to create a OwnerSelector.ts like this:

```ts
import { Component, OnInit } from '@angular/core';
import { BaseSelector } from '../base-selector/base-selector';
import { OwnerModel } from '../../models/owner/owner.model';
import { BaseService } from '../../services/base/base.service';

@Component({
	selector: 'app-owner-selector',
	templateUrl: '../base-selector/base-selector.component.html',
	styleUrls: ['./owner-selector.component.scss']
})
export class OnwerSelectorComponent extends BaseSelector<OwnerModel>  implements OnInit {

	constructor(service: BaseService<OwnerModel>) {
		super(service);
	}

	override ngOnInit() {
		super.ngOnInit();
	}

}
```

Notice that the templateUrl is set to the base-selector.component.html.
The OwnerSelectorComponent extends BaseSelector, passing OwnerModel as a type.
In the constructor, a service of type OwnerModel is passed to the super.

OnwerSelectorModel imports CommonModule as usual, ReactiveForms to input a FormControl and DropdownModule to use <p-dropdown>

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { OnwerSelectorComponent } from './owner-selector.component';

@NgModule({
  imports: [
    CommonModule,
	DropdownModule,
	ReactiveFormsModule,
  ],
  declarations: [OnwerSelectorComponent],
  exports: [OnwerSelectorComponent],
})
export class OwnerSelectorModule { }

```
