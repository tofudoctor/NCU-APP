import {describe, expect, test} from '@jest/globals';
import {addnumber, addstring, addarr, obj} from './test_jest';

describe('sum module', () => {
    test('123 + 456 = 579', () => {
        expect(addnumber(123, 456)).toBe(579);
    });
}
);

describe('combine module', () => {
    test('Hello + World = HelloWorld', () => {
        expect(addstring('Hello', 'World')).toBe('HelloWorld');
    });
}
);

describe('arr module', () => {
    test('[1, 2, 3] + [4, 5, 6] = [5, 7, 9]', () => {
        expect(addarr([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    });
}
);

describe('arr module', () => {
    test('[1, 2, 3] + [4, 5, 6, 7] = [5, 7, 9, 7]', () => {
        expect(addarr([1, 2, 3], [4, 5, 6, 7])).toEqual([5, 7, 9, 7]);
    });
}
);

describe('arr module', () => {
    test('[1, 2, 3, 4] + [4, 5, 6, ] = [5, 7, 9, 4]', () => {
        expect(addarr([1, 2, 3, 4], [4, 5, 6])).toEqual([5, 7, 9, 4]);
    });
}
);

describe('obj module', () => {
    test('put 1 and 2 in an object to equal {a:1,b:2}', () => {
        expect(obj(1, 2)).toEqual({a:1,b:2});
    });
}
);