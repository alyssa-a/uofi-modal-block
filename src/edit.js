/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// WordPress dependencies
import { PanelBody, SelectControl } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

// Import icon name list
import iconOptionsList from '../includes/il-icons-options.json';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit( { attributes, setAttributes, isSelected, clientId } ) {
	
	const { modalId, triggerType, triggerText, triggerButtonStyle, triggerIcon, triggerIconStyle, triggerIconColor, triggerJustification, modalHeading } = attributes;
	
	const isInnerBlockSelected = useSelect(
		(select) => {
			return select('core/block-editor').hasSelectedInnerBlock(clientId, true)
		}
	);
	
	const instanceId = useInstanceId(Edit);
	useEffect(() => {
		setAttributes({ modalId: `uofi-modal-${instanceId + 1}` });
	}, []);
	
	const iconOptions = iconOptionsList.map((icon) => {
			return ({label: icon, value: icon});
		}
	);

	const modalTitleLabel = modalId + "-title";
	
	const onChangeTriggerType = (newTriggerType) => {
		setAttributes( { triggerType: newTriggerType } );
	}

	const onChangeTriggerText = (newTriggerText) => {
		setAttributes( { triggerText: newTriggerText } );
	}

	const onChangeTriggerButtonStyle = (newStyle) => {
		setAttributes( { triggerButtonStyle: newStyle } );
	}

	const onChangeTriggerIcon = (newIcon) => {
		setAttributes( { triggerIcon: newIcon } );
	}

	const onChangeTriggerIconStyle = (newIconStyle) => {
		setAttributes( { triggerIconStyle: newIconStyle } );
	}

	const onChangeTriggerIconColor = (newColor) => {
		setAttributes( { triggerIconColor: newColor } );
	}

	const onChangeTriggerJustification = (newJustification) => {
		setAttributes( { triggerJustification: newJustification } );
	}

	const onChangeModalHeading = (newHeading) => {
		setAttributes( { modalHeading: newHeading } );
	}
	
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Modal Trigger">
					<SelectControl 
						label="Trigger Type"
						value={ triggerType }
						options={ [
							{ value: 'button', label: 'Button' },
							{ value: 'icon', label: 'Icon' }
						] }
						onChange={ onChangeTriggerType }
					/>
					{( () => {
						if (triggerType == 'button') {
							return (
								<SelectControl
									label="Button Style"
									value={ triggerButtonStyle }
									options={ [
										{ label: 'Blue Text', value: 'il-white-blue' },
										{ label: 'Orange Text', value: 'il-white-orange' },
										{ label: 'Blue Background', value: 'il-blue' },
										{ label: 'Orange Background', value: 'il-orange' },
									] }
									onChange={ onChangeTriggerButtonStyle } 
								/>
							)
						} else if (triggerType == 'icon') {
							return (
								<>
									<SelectControl
										label="Icon"
										value={ triggerIcon }
										options={ iconOptions }
										onChange={ onChangeTriggerIcon } 
									/>

									<SelectControl
										label="Icon Style"
										help="Some icons not available in line style"
										value={ triggerIconStyle }
										options={ [
											{ label: 'Filled', value: 'il-icon' },
											{ label: 'Line', value: 'il-icon-line' }
										] }
										onChange={ onChangeTriggerIconStyle } 
									/>

									<SelectControl
										label="Icon Color"
										value={ triggerIconColor }
										options={ [
											{ label: 'Orange', value: 'orange-icon' },
											{ label: 'Blue', value: 'blue-icon' },
											{ label: 'White', value: 'white-icon' }
										] }
										onChange={ onChangeTriggerIconColor } 
									/>
								</>
							)
						}
					})()}
					<SelectControl
						label="Trigger Justification"
						value={ triggerJustification }
						options={ [
							{ label: 'Left', value: 'items-justified-left' },
							{ label: 'Center', value: 'items-justified-center' },
							{ label: 'Right', value: 'items-justified-right' }
						] }
						onChange={ onChangeTriggerJustification } 
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ `uofi-modal-trigger-wrapper ${triggerJustification}` }>
				{ triggerType == 'button' ? (
					<button className={ `uofi-modal-trigger il-button ${triggerButtonStyle}` } >
						<RichText
							aria-label={ __( 'Trigger button text' ) }
							placeholder={ __( 'Trigger text...' ) }
							value={ triggerText }
							onChange={ onChangeTriggerText }
							allowedFormats={ [] }
						/>
					</button>
				) :
				(
					<button type="button" className="uofi-modal-trigger uofi-modal-icon-button" aria-label={ `${modalHeading} modal trigger` } >
						<span className={ `uofi-modal-icon ${triggerIconStyle} ${triggerIconColor}` }>{ triggerIcon }</span>
					</button>
				) }
			</div>
			
			{(isSelected || isInnerBlockSelected) && (
				<div className="uofi-modal il-formatted" id={ modalId }>
					<div className="uofi-modal-content">
						<RichText
							tagName="h2"
							className="uofi-modal-title"
							id={ modalTitleLabel }
							aria-label={ __( 'Modal title' ) }
							placeholder={ __( 'Modal title...' ) }
							value={ modalHeading }
							onChange={ onChangeModalHeading }
							allowedFormats={ [] }
						/>

						<InnerBlocks/>
					</div>
				</div>
			)}
			
		</div>
	);
}
