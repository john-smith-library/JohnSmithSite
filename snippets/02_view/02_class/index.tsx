import { Application } from 'john-smith';
import { View } from 'john-smith/view';
import 'john-smith/view/jsx';


class ApplicationViewModel {
    public readonly message = 'Hello, World!';
}

class ApplicationView implements View {
    constructor(
        private readonly viewModel: ApplicationViewModel) {
    }

    public template() {
        return <section>
            <h1>View as a class demo</h1>

            <p>This is the view markup.</p>

            <p>This is a message from <i>ViewModel</i>: {this.viewModel.message}</p>
        </section>;
    }
}

new Application().render(
    'root',
    ApplicationView,
    new ApplicationViewModel());
