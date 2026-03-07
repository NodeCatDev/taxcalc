import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
	title: '副業税金の計算ツール',
	description: '副業収入を入力するだけで税金を概算計算できます。',
};

export default function CalculatorPage() {
	return <CalculatorClient />;
}
