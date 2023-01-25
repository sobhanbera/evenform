import { useTheme } from "@/hooks";

export default function Home() {
    const { toggleTheme } = useTheme();

    return (
        <button
            onClick={() => {
                toggleTheme();
            }}
        >
            Toggle
        </button>
    );
}
