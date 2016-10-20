const defaultConfig = {
  id: null,
  name: '',
  state: 'inactive'
}

export class Hero {
  id: number;
  name: string;
  state: string;
  constructor(private config = defaultConfig) {
    this.id = config.id || null;
    this.name = config.name || '';
    this.state = config.state || 'inactive';
  }

  toggleState(): void {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
