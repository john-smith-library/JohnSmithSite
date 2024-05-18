import { Application } from 'john-smith';
import 'john-smith/view/jsx';
import {ObservableValue} from "john-smith/reactive";
import {map} from "john-smith/reactive/transformers/map";

class ApplicationViewModel {
    public readonly rounded = new ObservableValue<boolean>(true);
    public readonly active = new ObservableValue<boolean>(true);
    public readonly status = new ObservableValue<'active'|'stopped'>('active');

    public toggleActive() {
        this.active.mutate(x => !x);
    }

    public toggleRounded() {
        this.rounded.mutate(x => !x);
    }

    public toggleStatus() {
        this.status.mutate(x => x === 'active' ? 'stopped' : 'active');
    }
}

const ApplicationView = (viewModel: ApplicationViewModel) => {
    return <section>
        <h1>Class Bindings Demo</h1>

        <table>
            <tbody>
                <tr>
                    <th>Class bound via <code>attribute</code>:</th>
                    <td class={viewModel.status}></td>
                    <td>
                        <button _click={viewModel.toggleStatus}>Toggle Status</button>
                    </td>
                </tr>
                <tr>
                    <th>Class bound via <code>$className</code>:</th>
                    <td $className={viewModel.status}>
                    </td>
                    <td>
                        <button _click={viewModel.toggleStatus}>Toggle Status</button>
                    </td>
                </tr>
                <tr>
                    <th>Multiple classes bound via <code>$className</code>:</th>
                    <td $className={{ active: viewModel.active, rounded: viewModel.rounded }}></td>
                    <td>
                        <button _click={viewModel.toggleActive} style="margin-right: 10px;">Toggle Active</button>
                        <button _click={viewModel.toggleRounded}>Toggle Rounded</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>;
}

new Application().render(
    'root',
    ApplicationView,
    new ApplicationViewModel());
