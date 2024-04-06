import { Layout } from '#layouts/app';

export function Home() {
    return (
        <Layout title={'Home Page'} children={
            <div class="h-full flex justify-center items-center">
                <button class="btn btn-primary">Start the adventure</button>
            </div>
        } />
    );
}
