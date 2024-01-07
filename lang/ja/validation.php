<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'この :attribute は許可されなければなりません。',
    'accepted_if' => 'この :attribute mは :other が :value の時許可されてなければいけません。',
    'active_url' => 'この :attribute は有効なURLではありません。',
    'after' => 'この :attribute は :date 以降の日付でなければなりません。',
    'after_or_equal' => 'この :attribute は :date　以降もしくは、同じ日付でなければなりません。',
    'alpha' => 'この :attribute はアルファベットのみ使用可能です。',
    'alpha_dash' => 'この :attribute はアルファベット、数字、ダッシュ、アンダースコア、のみ使用可能です。',
    'alpha_num' => 'この :attribute はアルファベット、数字のみ使用可能です。',
    'array' => 'この :attribute は配列でなければなりません。',
    'before' => 'この :attribute は :date 以前の日付でなければなりません。',
    'before_or_equal' => 'この :attribute は :date 以前もしくは、同じ日付でなければなりません。',
    'between' => [
        'array' => 'この :attribute は :min から :max までのアイテムでなければなりません。',
        'file' => 'この :attribute は :min から :max Kbでなければなりません。',
        'numeric' => 'この :attribute は :min から :max の間でなければなりません。',
        'string' => 'この :attribute は :min から :max までの文字数でなければなりません。',
    ],
    'boolean' => 'この :attribute 入力欄は true もしくは false でなければなりません。',
    'confirmed' => 'この :attribute の認証がマッチしません。',
    'current_password' => 'パスワードが違います。',
    'date' => 'この :attribute は有効な日付ではありません。',
    'date_equals' => 'この :attribute は :date とイコールな日付でなければなりません。',
    'date_format' => 'この :attribute は :format このフォーマットに合っていません。',
    'declined' => 'この :attribute 拒否しなければなりません。',
    'declined_if' => 'この :attribute mは :other が :value の時拒否されなければなりません。',
    'different' => 'この :attribute と :other は違わなければいけません。',
    'digits' => 'この :attribute は :digits digitsでなければなりません。',
    'digits_between' => 'この :attribute は :min から :max の間の digits でなければなりません。',
    'dimensions' => 'この :attribute has invalid image dimensions.',
    'distinct' => 'この :attribute field has a duplicate value.',
    'doesnt_start_with' => 'この :attribute は以下の物で開始されてはいけません。: :values.',
    'email' => 'この :attribute は有効なメールアドレスでなければいけません。',
    'ends_with' => 'この :attribute は以下のもので終わらなければいけません。: :values.',
    'enum' => '選択された :attribute は無効です。',
    'exists' => '選択された :attribute は無効です。',
    'file' => 'この :attribute はファイルでなければなりません。',
    'filled' => 'この :attribute 欄はvalueでなければなりません。',
    'gt' => [
        'array' => 'この :attribute は :value よりも多いitemsでなければなりません。',
        'file' => 'この :attribute は :value kilobytes以上でなければなりません。',
        'numeric' => 'この :attribute は :value 以上でなければなりません。',
        'string' => 'この :attribute は :value 文字以上でなければなりません。',
    ],
    'gte' => [
        'array' => 'この :attribute は :value もしくはそれ以上なければいけません。',
        'file' => 'この :attribute は :value kilobytes以上もしくは、同じでなければいけません。',
        'numeric' => 'この :attribute は :value と同じかそれ以上でなければいけません。',
        'string' => 'The :attribute must be greater than or equal to :value characters.',
    ],
    'image' => 'The :attribute must be an image.',
    'in' => 'The selected :attribute is invalid.',
    'in_array' => 'The :attribute field does not exist in :other.',
    'integer' => 'The :attribute must be an integer.',
    'ip' => 'The :attribute must be a valid IP address.',
    'ipv4' => 'The :attribute must be a valid IPv4 address.',
    'ipv6' => 'The :attribute must be a valid IPv6 address.',
    'json' => 'The :attribute must be a valid JSON string.',
    'lt' => [
        'array' => 'The :attribute must have less than :value items.',
        'file' => 'The :attribute must be less than :value kilobytes.',
        'numeric' => 'The :attribute must be less than :value.',
        'string' => 'The :attribute must be less than :value characters.',
    ],
    'lte' => [
        'array' => 'The :attribute must not have more than :value items.',
        'file' => 'The :attribute must be less than or equal to :value kilobytes.',
        'numeric' => 'The :attribute must be less than or equal to :value.',
        'string' => 'The :attribute must be less than or equal to :value characters.',
    ],
    'mac_address' => 'The :attribute must be a valid MAC address.',
    'max' => [
        'array' => 'The :attribute must not have more than :max items.',
        'file' => 'The :attribute must not be greater than :max kilobytes.',
        'numeric' => 'The :attribute must not be greater than :max.',
        'string' => 'The :attribute must not be greater than :max characters.',
    ],
    'mimes' => 'The :attribute must be a file of type: :values.',
    'mimetypes' => 'The :attribute must be a file of type: :values.',
    'min' => [
        'array' => 'The :attribute must have at least :min items.',
        'file' => 'The :attribute must be at least :min kilobytes.',
        'numeric' => 'The :attribute must be at least :min.',
        'string' => 'The :attribute must be at least :min characters.',
    ],
    'multiple_of' => 'The :attribute must be a multiple of :value.',
    'not_in' => 'The selected :attribute is invalid.',
    'not_regex' => 'The :attribute format is invalid.',
    'numeric' => 'The :attribute must be a number.',
    'password' => [
        'letters' => 'The :attribute must contain at least one letter.',
        'mixed' => 'The :attribute must contain at least one uppercase and one lowercase letter.',
        'numbers' => 'The :attribute must contain at least one number.',
        'symbols' => 'The :attribute must contain at least one symbol.',
        'uncompromised' => 'The given :attribute has appeared in a data leak. Please choose a different :attribute.',
    ],
    'present' => 'The :attribute field must be present.',
    'prohibited' => 'The :attribute field is prohibited.',
    'prohibited_if' => 'The :attribute field is prohibited when :other is :value.',
    'prohibited_unless' => 'The :attribute field is prohibited unless :other is in :values.',
    'prohibits' => 'The :attribute field prohibits :other from being present.',
    'regex' => 'The :attribute format is invalid.',
    'required' => 'The :attribute field is required.',
    'required_array_keys' => 'The :attribute field must contain entries for: :values.',
    'required_if' => 'The :attribute field is required when :other is :value.',
    'required_unless' => 'The :attribute field is required unless :other is in :values.',
    'required_with' => 'The :attribute field is required when :values is present.',
    'required_with_all' => 'The :attribute field is required when :values are present.',
    'required_without' => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same' => 'The :attribute and :other must match.',
    'size' => [
        'array' => 'The :attribute must contain :size items.',
        'file' => 'The :attribute must be :size kilobytes.',
        'numeric' => 'The :attribute must be :size.',
        'string' => 'The :attribute must be :size characters.',
    ],
    'starts_with' => 'The :attribute must start with one of the following: :values.',
    'string' => 'The :attribute must be a string.',
    'timezone' => 'The :attribute must be a valid timezone.',
    'unique' => 'The :attribute has already been taken.',
    'uploaded' => 'The :attribute failed to upload.',
    'url' => 'The :attribute must be a valid URL.',
    'uuid' => 'The :attribute must be a valid UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];