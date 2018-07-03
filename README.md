# Yoast CMB2 Field Analysis WP Plugin

## About this plugin

This plugin adds in a `js` based method of recalculating Yoast SEO's content
scores when updating page content, specifically custom meta fields added via the
CMB2 library.

A `js` method is the required due to the `php` filters that used to allow for
recalculating being removed from the plugin towards the end of 2015.

This plugin will work with either the CMB2 WordPress plugin or the library files
if used directly within your WordPress theme.

## Installing

To install, simply download a `.zip` version of this repository and upload to
your WordPress instance via the Admin screens,
`Plugins -> Add New -> Upload Plugin`.

## Usage

In order for your CMB2 field content to be calculated in the SEO score, ensure
to set a new attribute "yoast-analysis=1" on the field For example : 

```php 
  $cmb->add_field( array(
    'name'    => 'Test Text',
    'desc'    => 'field description (optional)',
    'default' => 'standard value (optional)',
    'id'      => 'wiki_test_text',
    'type'    => 'text',
    'attributes' => array(
      'yoast-analysis'		=> '1', // Enable Yoast Analysis for this textField
      'yoast-analysis-before' 	=> 'BeforeString ', // Optionnal string that must be added before field value
      'yoast-analysis-after' 	=> ' AfterString', // Optionnal string that must be added after field value
    )
) );
  
```
In the example above, if the field value is "helloWorld", Yoast Analysis will add "BeforeString helloWorld AfterString".

If you are trying to analyze a group field that is a wysiwyg editor adding an attribute will not work, you will have to add an extra_class of yoast-analysis to the wysiwyg field options instead.  This also means that you can not set before and after strings on the wysiwyg editor since the attributes will not be added to the field.
For example:

```php 
	$cmb->add_group_field( $group_field_id, array(
    'name'    => 'Test wysiwyg',
    'id'      => 'wiki_test_text',
    'type'    => 'wysiwyg',
    'options'     => array(
			'editor_class' => 'yoast-analysis', // add extra class(es) to the editor textarea for yoast analysis
		),
) );
  
```
If you are trying to analyize a text field in a group field you can just add add an attribute just like a regular text field as well as regular textareas.

For example adding attributes fro regular textarea not wysiwyg:

```php 
	$cmb->add_group_field( $group_field_id, array(
    'name'    => 'Test textarea',
    'id'      => 'wiki_test_text',
    'type'    => 'textarea',
    'attributes'     => array(
			'yoast-analysis' => '1',
		),
) );

	$cmb->add_group_field( $group_field_id, array(
    'name'    => 'Test Text Field',
    'id'      => 'wiki_test_text',
    'type'    => 'text',
    'attributes'     => array(
			'yoast-analysis' => '1',
		),
) );
```
## WordPress and Yoast SEO dependencies

Currently, this plugin has been tested up to WordPress
`4.6` and Yoast SEO `3.5`

This plugin will be updated and retested with new versions of both
WordPress and the Yoast SEO plugin, with the version numbers above
updated to reflect this.
