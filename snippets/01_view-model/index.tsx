import { Application } from 'john-smith';
import { ObservableValue } from "john-smith/reactive";
import 'john-smith/view/jsx';

class /*(*/ApplicationViewModel/*)*/ {
    // This is a static text
    public readonly message = 'Hello, World!';

    // This is an observable value. A View would be able to listen to it's changes
    public readonly name = new ObservableValue<string>('John Smith');

    // This is a method to receive signals from a View
    public setName() {
        // We update dynamic value here
        this.name.setValue('John Doe');
    }
}

const ApplicationView = (viewModel: ApplicationViewModel) =>
    <section>
        <h1>Simple ViewModel Demo</h1>

        <p>Static message from ViewModel: <b>{viewModel.message}</b></p>
        <p>Dynamic name from ViewModel: <b>{viewModel.name}</b></p>

        <button _click={viewModel.setName}>Click to Set Name</button>
    </section>;

new Application().render(
    'root',
    ApplicationView,
    new ApplicationViewModel());
