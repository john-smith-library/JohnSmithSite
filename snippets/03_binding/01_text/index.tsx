import { Application } from 'john-smith';
import 'john-smith/view/jsx';
import {ObservableValue} from "john-smith/reactive";

class ApplicationViewModel {
    public readonly message = 'Hello, World!';
    public readonly age = new ObservableValue(42);

    public getOlder(): void {
        this.age.setValue(this.age.getValue() + 1);
    }
}

const ApplicationView = (viewModel: ApplicationViewModel) => {
    return <section>
        <h1>Text Bindings Demo</h1>

        <table>
            <tr>
                <th>Static text value:</th>
                <td>{viewModel.message}</td>
            </tr>
            <tr>
                <th>Dynamic value:</th>
                <td>{viewModel.age}</td>
            </tr>
        </table>

        <button _click={viewModel.getOlder}>Update Dynamic Value</button>
    </section>;
}

new Application().render(
    'root',
    ApplicationView,
    new ApplicationViewModel());
