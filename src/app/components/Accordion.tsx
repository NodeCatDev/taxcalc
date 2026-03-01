'use client';

import { useState, useId, ReactNode } from 'react';

type Props = {
	title: string;
	content: ReactNode;
};

export default function Accordion({ title, content }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const contentId = useId();

	return (
		<div className="border-b mb-3">
			<h3>
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
					aria-controls={contentId}
					className="w-full text-left py-4 font-medium flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<span>{title}</span>
					<span className="text-xl transition-transform duration-200" aria-hidden="true">
						{isOpen ? '−' : '+'}
					</span>
				</button>
			</h3>

			<div
				id={contentId}
				role="region"
				aria-labelledby={contentId}
				className={`overflow-hidden transition-all duration-300 ${
					isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="text-gray-600 text-sm leading-relaxed">{content}</div>
			</div>
		</div>
	);
}
