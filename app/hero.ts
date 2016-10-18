export class Hero {
  id: number;
  name: string;
  state: string = 'inactive';

  toggleState(): void {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
