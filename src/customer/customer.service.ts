import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDto):Customer {
        console.log("Create customer ", createCustomerDto);
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDto
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }


}

// mainly works on posting data

// Typescript works in compile time not in run time

//  class-validator validates typescript properties
// class-transformer helps in converting plain json objects into class instances