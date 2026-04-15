/**
 * Represents a Developer full name
 */

export class Developer {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get fullname() {
        return '{this.#firstName?.trim() }';
    }
}