import { Application } from 'john-smith';
import 'john-smith/view/jsx';
import { ObservableValue } from 'john-smith/reactive';
import { map } from 'john-smith/reactive/transformers/map';

class ApplicationViewModel {
  public readonly age = new ObservableValue(42);
  public readonly available = new ObservableValue<boolean>(true);
  public readonly status = new ObservableValue<'active' | 'stopped'>('active');

  public getOlder(): void {
    this.age.mutate(x => x + 1);
  }

  public toggleAvailability() {
    this.available.mutate(x => !x);
  }

  public toggleStatus() {
    this.status.mutate(x => (x === 'active' ? 'stopped' : 'active'));
  }
}

const ApplicationView = (viewModel: ApplicationViewModel) => {
  // We map boolean observable value to be true or undefined.
  // When bound to an attribute the undefined means the attribute
  // should be removed from DOM Element.
  const checkedValue = map(viewModel.available, available =>
    available ? true : undefined
  );

  return (
    <section>
      <h1>Attributes Bindings Demo</h1>

      <table>
        <tbody>
          <tr>
            <th>Bind number to value attribute:</th>
            <td>
              <input value={viewModel.age} />
            </td>
            <td>
              <button _click={viewModel.getOlder}>Increment</button>
            </td>
          </tr>
          <tr>
            <th>Bind to checked attribute:</th>
            <td>
              <input type="checkbox" checked={checkedValue} />
            </td>
            <td>
              <button _click={viewModel.toggleAvailability}>Toggle</button>
            </td>
          </tr>
          <tr>
            <th>Bind to class attribute</th>
            <td class={viewModel.status}></td>
            <td>
              <button _click={viewModel.toggleStatus}>Toggle</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

new Application().render('root', ApplicationView, new ApplicationViewModel());
