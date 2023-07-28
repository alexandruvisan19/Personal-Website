import type { ISkillsProps } from '../types';

export function createLongString(array: ISkillsProps[]) {
  let string = '';

  array.forEach(element => {
    string += element.name + ' • ';
  });

  return string.slice(0, string.length - 2);
}
